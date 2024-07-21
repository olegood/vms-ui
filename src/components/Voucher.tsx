import React from 'react';

export interface VoucherProps {
  id: string;
  organization: string;
  count: number;
}

const Voucher: React.FC<VoucherProps> = ({ id, organization, count }) => {
  return (
    <fieldset>
      <legend>Voucher: {id}</legend>
      <label>{organization + ', count=' + count}</label>
    </fieldset>
  );
};

export default Voucher;