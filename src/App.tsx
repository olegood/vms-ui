import { useEffect, useState } from 'react';
import './App.css';
import Voucher, { VoucherProps } from './components/Voucher.tsx';

function App() {

  const [vouchers, setVouchers] = useState<VoucherProps[]>([]);

  useEffect(() => {
    fetch('/api/voucher')
      .then(response => response.json())
      .then(data => setVouchers(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      {vouchers.map(obj => <Voucher {...obj}/>)}
    </>
  );
}

export default App;
