import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../../contact/page';
jest.unstable_mockModule('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
describe('Contact Page Tests', () => {
  test('form elemanları render ediliyor', () => {
    render(<Contact />);
    
    
    expect(screen.getByLabelText('İsim')).toBeInTheDocument();
    expect(screen.getByLabelText('E-posta')).toBeInTheDocument();
    expect(screen.getByLabelText('Mesaj')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Gönder' })).toBeInTheDocument();
  });
});