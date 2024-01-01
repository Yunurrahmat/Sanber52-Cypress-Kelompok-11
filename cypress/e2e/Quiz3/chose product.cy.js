beforeEach (() => {
    cy.visit('https://magento.softwaretestingboard.com/');
})
it('Cari Produk', () => {

  // Cari produk
  cy.get('#search') 
    .type('tees')
    .should('have.value', 'tees');
  cy.get('.action.search').click(); 

  // Verifikasi hasil pencarian
  cy.get('.product-item')
});

it('verify Pencarian', () => {
 // Cari produk dengan kata kunci yang tidak valid
 cy.get('#search') 
 .type('botol') 
cy.get('.action.search').click();

// Verifikasi bahwa pesan kesalahan muncul
cy.get('.message.notice').should('contain', 'Your search returned no results.'); 
});

it('Pilih Produk dan Masukkan ke Cart', () => {

  // Cari dan pilih produk
  cy.get('#search')
    .type('tees')
    .should('have.value', 'tees');

  cy.get('.action.search').click();

  cy.get('.product-item').first().click();

  // Tentukan ukuran produk yang akan dibeli
  cy.get('.swatch-attribute.size').click();

 // Tentukan warna produk yang akan dibeli
 cy.get('.swatch-option.selected').click();

  // Tentukan jumlah produk yang akan dibeli
  cy.get('#qty').clear().type('2'); 

  // Klik tombol "Tambah ke Keranjang"
  cy.get('#product-addtocart-button').click(); 

  // Verifikasi bahwa produk berhasil ditambahkan ke keranjang
  //cy.get('.success-msg').should('contain', 'Anda menambahkan Produk ke dalam keranjang belanja.'); 
  cy.get('.minicart-items-count').should('contain', '2'); 
});




    
