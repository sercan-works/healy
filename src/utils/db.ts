import { sql } from '@vercel/postgres';

export async function getProducts() {
  try {
    const { rows } = await sql`SELECT * FROM products`;
    return rows;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}