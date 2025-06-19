import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../../app/contact/page';
import '@testing-library/jest-dom';
import { expect } from '@playwright/test';

describe("",async()=>{
      beforeEach(() => {
    fetch.mockClear();
  });

test("form elemanları render ediliyor",()=>{
render(<Contact />);
expect(screen.getByLabelText("İsim")).toBeInTheDocument();
expect(screen.getByLabelText("E-posta")).toBeInTheDocument();
expect(screen.getByLabelText("Mesaj")).toBeInTheDocument();
expect(screen.getByRole("button",{name:"Gönder"})).toBeInTheDocument();

})


});