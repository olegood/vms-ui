import { useEffect, useState } from 'react';
import './App.css';
import BasicTable from './components/BasicTable.tsx';
import ButtonAppBar from './components/AppBar.tsx';
import { IVoucher } from './types/IVoucher.tsx';

function App() {

  const [vouchers, setVouchers] = useState<IVoucher[]>([]);

  useEffect(() => {
    fetch('/api/voucher')
      .then(response => response.json())
      .then(data => setVouchers(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <ButtonAppBar/>
      <BasicTable data={vouchers}/>
    </>
  );
}

export default App;
