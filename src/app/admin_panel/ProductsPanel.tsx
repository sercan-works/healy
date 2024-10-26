"use client"

import { getProducts } from '@/utils/db';
import { QueryResultRow } from '@vercel/postgres';
import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, TextField } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { sql } from '@vercel/postgres';

const ProductDetails = () => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [products, setProducts] = useState<QueryResultRow[]>([]);

  // State to manage dialog open/close
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // State to manage dialog for adding a product
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newProduct, setNewProduct] = useState<any>({
    name: '',
    description: '',
    price: '',
    created_at: new Date().toISOString(), // Default to current date
    tag: '',
    discount: '',
    link: '',
    old_price: '',
    slug: ''
  }); // State for new product data

  async function fetchProducts() {
    try {
      const productsData = await getProducts();
      setProducts(productsData);
      console.log("Cihazlar:", productsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  if (!products) {
    return <div>Ürün bulunamadı.</div>;
  }

  function handleEdit(id: any): void {
    throw new Error('Function not implemented.');
  }

  // Function to handle deleting a product
  const handleDelete = async (id: any) => {
    try {
      // Delete the product from the database
      await sql`
        DELETE FROM products WHERE id = ${id}
      `;
      await fetchProducts(); // Refresh the product list after deletion
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Function to handle edit button click
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  // Function to close the dialog
  const handleClose = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  // Handle save function to update the product in the database
  const handleSave = async () => {
    try {
      // Güncelleme sorgusu
      // await sql`
      //   UPDATE products SET name = ${selectedProduct?.name}, description = ${selectedProduct?.description}, price = ${selectedProduct?.price}, created_at = ${selectedProduct?.created_at}, tag = ${selectedProduct?.tag}, discount = ${selectedProduct?.discount}, link = ${selectedProduct?.link}, old_price = ${selectedProduct?.old_price}, slug = ${selectedProduct?.slug} WHERE id = ${selectedProduct?.id}
      // `;

      // Güncelleme başarılı ise, ürün listesini güncelleyebilirsiniz
      // Örneğin, ürünleri yeniden yükleyebilir veya mevcut listeyi güncelleyebilirsiniz
      // setProducts(await getProducts()); // Güncellenmiş ürün listesini ayarlayın
      await fetchProducts();
      handleClose(); // Dialog'u kapat
    } catch (error) {
      console.error('Güncelleme hatası:', error);
      // Hata durumunda kullanıcıya bir mesaj gösterebilirsiniz
    }
  };

  // Function to handle adding a new product
  const handleAddProduct = async () => {
    try {
      // Insert new product into the database
      await sql`
        INSERT INTO products (name, description, price, created_at, tag, discount, link, old_price, slug) 
        VALUES (${newProduct.name}, ${newProduct.description}, ${newProduct.price}, ${newProduct.created_at}, ${newProduct.tag}, ${newProduct.discount}, ${newProduct.link}, ${newProduct.old_price}, ${newProduct.slug})
      `;
      await fetchProducts(); // Refresh the product list
      handleCloseAddDialog(); // Close the add dialog
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Function to close the add dialog
  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
    setNewProduct({ // Reset new product state
      name: '',
      description: '',
      price: '',
      created_at: new Date().toISOString(),
      tag: '',
      discount: '',
      link: '',
      old_price: '',
      slug: ''
    });
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpenAddDialog(true)}>Ürün Ekle</Button> {/* Button to open add dialog */}
      
      {/* Dialog for adding a new product */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Yeni Ürün Ekle</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Cihaz Adı"
            type="text"
            fullWidth
            variant="outlined"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Ürün Açıklaması"
            type="text"
            fullWidth
            variant="outlined"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Fiyat"
            type="number"
            fullWidth
            variant="outlined"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Etiket"
            type="text"
            fullWidth
            variant="outlined"
            value={newProduct.tag}
            onChange={(e) => setNewProduct({ ...newProduct, tag: e.target.value })}
          />
          <TextField
            margin="dense"
            label="İndirim"
            type="text"
            fullWidth
            variant="outlined"
            value={newProduct.discount}
            onChange={(e) => setNewProduct({ ...newProduct, discount: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Link"
            type="text"
            fullWidth
            variant="outlined"
            value={newProduct.link}
            onChange={(e) => setNewProduct({ ...newProduct, link: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Eski Fiyat"
            type="number"
            fullWidth
            variant="outlined"
            value={newProduct.old_price}
            onChange={(e) => setNewProduct({ ...newProduct, old_price: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Slug"
            type="text"
            fullWidth
            variant="outlined"
            value={newProduct.slug}
            onChange={(e) => setNewProduct({ ...newProduct, slug: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="primary">İptal</Button>
          <Button onClick={handleAddProduct} color="primary">Ekle</Button>
        </DialogActions>
      </Dialog>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Cihaz Adı</TableCell>
            <TableCell align="right">Ürün Açıklaması</TableCell>
            <TableCell align="right">Fiyat</TableCell>
            <TableCell align="right">EskiFiyat</TableCell>
            <TableCell align="right">İndirim</TableCell>
            <TableCell align="right">Tag</TableCell>
            <TableCell align="right">Link</TableCell>
            <TableCell align="right">Slug</TableCell>
            <TableCell align="right">Aksiyon</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{product.id}</TableCell>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.description}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.old_price}</TableCell>
              <TableCell align="right">{product.discount}</TableCell>
              <TableCell align="right">{product.tag}</TableCell>
              <TableCell align="right">{product.link}</TableCell>
              <TableCell align="right">{product.slug}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary" onClick={() => handleEditProduct(product)}>Düzenle</Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(product.id)}>Sil</Button> {/* Delete button */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* Dialog for editing product */}
    {/* <Dialog open={openDialog} onClose={handleClose}>
      <DialogTitle>Ürünü Düzenle</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Cihaz Adı"
          type="text"
          fullWidth
          variant="outlined"
          value={selectedProduct?.name || ''}
          onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Ürün Açıklaması"
          type="text"
          fullWidth
          variant="outlined"
          value={selectedProduct?.description || ''}
          onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Fiyat"
          type="number"
          fullWidth
          variant="outlined"
          value={selectedProduct?.price || ''}
          onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Eski Fiyat"
          type="text"
          fullWidth
          variant="outlined"
          value={selectedProduct?.old_price || ''}
          onChange={(e) => setSelectedProduct({ ...selectedProduct, old_price: e.target.value })}
        />
        <TextField
          margin="dense"
          label="İndirim Oranı"
          type="text"
          fullWidth
          variant="outlined"
          value={selectedProduct?.discount || ''}
          onChange={(e) => setSelectedProduct({ ...selectedProduct, discount: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Tag"
          type="text"
          fullWidth
          variant="outlined"
          value={selectedProduct?.tag || ''}
          onChange={(e) => setSelectedProduct({ ...selectedProduct, tag: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Link"
          type="text"
          fullWidth
          variant="outlined"
          value={selectedProduct?.link || ''}
          onChange={(e) => setSelectedProduct({ ...selectedProduct, link: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Slug"
          type="text"
          fullWidth
          variant="outlined"
          value={selectedProduct?.slug || ''}
          onChange={(e) => setSelectedProduct({ ...selectedProduct, slug: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">İptal</Button>
        <Button onClick={handleSave} color="primary">Kaydet</Button>
      </DialogActions>
    </Dialog> */}
    </>
  );
};

export default ProductDetails;
