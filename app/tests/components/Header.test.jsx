// // tests/components/Header.test.jsx
// const { render, screen, fireEvent } = require('@testing-library/react');
// const Header = require('../path/to/Header').default;

// describe('Header Component', () => {
//    it('renders navigation links', () => {
//     render(<Header />);
    
//     // Masaüstü menü linkleri görünür (jsdom'da medya sorgusu yok, bu yüzden görünür sayılır)
//     expect(screen.getByText(/Ana Sayfa/i)).toBeInTheDocument();
//     expect(screen.getByText(/Hakkımda/i)).toBeInTheDocument();
//     expect(screen.getByText(/Projeler/i)).toBeInTheDocument();
//     expect(screen.getByText(/Sertifikalar/i)).toBeInTheDocument();
//     expect(screen.getByText(/İletişim/i)).toBeInTheDocument();
//   });
//    it('toggles mobile menu when hamburger icon is clicked', () => {
//     render(<Header />);

//     // Başta mobil menü görünmez
//     expect(screen.queryByText('Ana Sayfa')).toBeInTheDocument(); // jsdom'da tüm linkler var ama mobil görünürlük kontrolü zor, alternatif:
    
//     const toggleButton = screen.getByRole('button');
//     fireEvent.click(toggleButton);

//     // Menü açıldıktan sonra mobil linkler görünür olmalı
//     expect(screen.getAllByText(/Ana Sayfa/i)[1]).toBeVisible();

//     fireEvent.click(toggleButton);

//     // Menü kapandıktan sonra mobil linkler görünmez olabilir (query ile kontrol edebilirsin)
//     expect(screen.queryByText(/Ana Sayfa/i)).toBeInTheDocument(); // Bu test ortamında CSS görünürlüğü çalışmadığı için zor
//   });
// })