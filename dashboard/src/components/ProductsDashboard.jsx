import { useState, useEffect } from 'react';
import '../css/products-dashboard.css';

export default function ProductsDashboard() {
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/products/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setProductsCount(data.count);
      });
  }, []);

  return (
    <>
      <main>
        <h2>Administración de productos</h2>

        <section>
          <div className='head-table-container'>
            <section className='pl-filters'>
              <article className='searchbar'>
                <form action='/' method='POST'>
                  <input
                    type='text'
                    name='search'
                    placeholder='Buscar producto'
                  />
                </form>
              </article>

              <article className='pl-container-selects'>
                <form action='/marca' method='POST' className='pl-form-brand'>
                  <select>
                    <option>Marca</option>
                    <option value=''>Stella Artois</option>
                    <option value=''>Corona</option>
                    <option value=''>Patagonia</option>
                    <option value=''>Quilmes</option>
                  </select>
                </form>

                <form action='/medida' method='POST' className='pl-form-size'>
                  <select>
                    <option>Medida</option>
                    <option value=''>350 cc</option>
                    <option value=''>500 cc</option>
                    <option value=''>1000 cc</option>
                    <option value=''>1500 cc</option>
                  </select>
                </form>
                {/* <button className="btn-add">
                  <a href="/products/create">Agregar</a>
                  <i className="fa-solid fa-plus"></i>
                </button> */}
              </article>
            </section>
          </div>

          <section className='table-container'>
            <article>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Medida</th>
                    <th>Precio</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.size}</td>
                      <td>${product.price}</td>

                      <td>
                        <a href={`/products/${product.id}`}>
                          <button class='btn-view'>
                            <i class='fa-solid fa-eye'></i>
                          </button>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>

            <article className='pagination-container'>
              <div className='rows-per-page-container'>
                <label for='rowsPerPage'>Productos por página: </label>
                <select name='rowsPerPage' id='rowsPerPage'>
                  <option value='5'>5</option>
                  <option value='10'>10</option>
                  <option value='15'>15</option>
                </select>
              </div>

              <div className='pagination-counter-container'>
                <span>1 - 5 </span>
                de
                <span> {productsCount}</span>
              </div>

              <div className='pagination-btns-container'>
                <button>
                  <i className='fa-solid fa-arrow-left'></i>
                </button>
                <button>
                  <i className='fa-solid fa-arrow-right'></i>
                </button>
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}
