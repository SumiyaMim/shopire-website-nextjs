import React from 'react';

const Account = () => {
  const accounts = [
    {
      name: "Reddit Accounts | Registered In 07.2023. The Email Accounts Are Not Verified. Registered From MIX IP.",
      quantity: "981 Pcs.",
      price: "$0.25",
    },
    {
      name: "Reddit Accounts | Registered In 04.2024. The Email Accounts Are Not Verified. Accounts Are Registered In IP Addresses Of Different Countries.",
      quantity: "583 Pcs.",
      price: "$0.28",
    },
    {
      name: "Reddit Accounts | Registered In 06.2024. The Email Accounts Are Not Verified.",
      quantity: "244 Pcs.",
      price: "$0.56",
    },
    {
      name: "Reddit Accounts | The Accounts Were Registered In 02.2024. Verified By Email(Included In The Set). Accounts Are Registered In IP Addresses Of EU.",
      quantity: "142 Pcs.",
      price: "$0.83",
    },
    {
      name: "Reddit Accounts | The Accounts Were Registered In 02.2024. Verified By Email(Included In The Set). Accounts Are Registered In IP Addresses Of USA.",
      quantity: "169 Pcs.",
      price: "$0.83",
    },
    {
      name: "Reddit Accounts | The Accounts Were Registered In 01.2023. Verified By Email(Included In The Set). Accounts Are Registered In IP Addresses Of EU.",
      quantity: "226 Pcs.",
      price: "$1.11",
    },
    {
      name: "Reddit Accounts | The Accounts Were Registered In 06.2024. Verified By Email(Included In The Set). Accounts Are Registered In IP Addresses Of USA.",
      quantity: "410 Pcs.",
      price: "$1.11",
    },
    {
      name: "Reddit Accounts | Registered In 01.2023. The Email Accounts Are Not Verified. Accounts Are Registered In IP Addresses Of Different Countries.",
      quantity: "651 Pcs.",
      price: "$1.11",
    },
    {
      name: "Reddit Accounts | The Accounts Were Registered In 01.2023. Verified By Email(Included In The Set). The Accounts Registered With RU IP.",
      quantity: "113 Pcs.",
      price: "$1.11",
    },
    {
      name: "Reddit Accounts | The Accounts Were Registered In 01.2023. Verified By Email(Included In The Set). Accounts Are Registered In IP Addresses Of USA.",
      quantity: "175 Pcs.",
      price: "$1.11",
    },
  ];

  return (
    <div className='max-w-screen-xl mx-auto px-6 md:px-10 py-20'>
      <h1 className='text-3xl text-center font-semibold text-gray-700 mb-10'>
        Checkout <span className='text-[#ea4b3d]'>Account List</span>
      </h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full table-auto border-collapse'>
          <thead className="hidden sm:table-header-group">
            <tr className='bg-slate-100'>
              <th className='px-5 py-4 text-left md:text-center font-semibold text-slate-600 lg:w-3/5'>Name</th>
              <th className='px-5 py-4 text-left font-semibold text-slate-600'>Quantity (Pcs)</th>
              <th className='px-5 py-4 text-left font-semibold text-slate-600'>Unit Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-slate-100 md:bg-white' : 'bg-white md:bg-slate-50'} flex flex-col sm:flex-row sm:table-row w-full`}
              >                
                <td className='px-5 py-4 text-slate-600'>{account.name}</td>
                <td className='px-5 py-4 text-slate-600'>{account.quantity}</td>
                <td className='px-5 py-4 text-slate-600'>
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-1 lg:gap-16'>
                    <span>{account.price}</span>
                    <button className='md:ml-4 px-4 py-2 text-white bg-[#ea4b3d] rounded-md hover:bg-[#d33c2c] w-fit'>
                      Buy
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Account;
