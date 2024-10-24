"use client"
import React, { useEffect, useState } from 'react';

const ProductAdd = ({ id }: { id?: string }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [tag, setTag] = useState('');
  const [discount, setDiscount] = useState('');
  const [link, setLink] = useState('');
  const [oldPrice, setOldPrice] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (id) {
      // Eğer id varsa, mevcut ürünü yükle
      fetchProduct(id);
    }
  }, [id]);

  const fetchProduct = async (id: string) => {
    // Ürün verilerini al
    const response = await fetch(`/api/products/${id}`);
    const product = await response.json();
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setTag(product.tag);
    setDiscount(product.discount);
    setLink(product.link);
    setOldPrice(product.old_price);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const productData = { name, description, price, tag, discount, link, old_price: oldPrice };

    if (id) {
      // Güncelleme işlemi
      await updateProduct(id, productData);
    } else {
      // Yeni kayıt oluşturma
      await createProduct(productData);
    }
  };

  const createProduct = async (product: { name: string; description: string; price: number; tag: string; discount: string; link: string; old_price?: number }) => {
    await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
  };

  const updateProduct = async (id: string, product: { name: string; description: string; price: number; tag: string; discount: string; link: string; old_price?: number }) => {
    await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ürün Adı:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Açıklama:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Fiyat:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Etiket:</label>
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
      </div>
      <div>
        <label>İndirim:</label>
        <input
          type="text"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>
      <div>
        <label>Link:</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div>
        <label>Eski Fiyat:</label>
        <input
          type="number"
          value={oldPrice !== undefined ? oldPrice : ''}
          onChange={(e) => setOldPrice(e.target.value ? Number(e.target.value) : undefined)}
        />
      </div>
      <button type="submit">{id ? 'Güncelle' : 'Ekle'}</button>
    </form>
  );
};

export default ProductAdd;
