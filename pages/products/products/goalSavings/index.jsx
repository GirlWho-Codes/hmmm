import { Button, Chip } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { tableSearch } from '../../../../utils/tableSearch';
import { DataTable, Layout,  LabelInput, SVG, SubPageHeader } from "../../../../components"
import {Modals} from '../../../../components/modal'


/**
 * This is a getServerSideProps function thats help fetch personal savings data from server before the page loads
 */
export async function getServerSideProps() {
   const bearerToken = process.env.NEXT_PUBLIC_BEARER_TOKEN;
   const deviceToken = process.env.NEXT_PUBLIC_DEVICE_TOKEN;
   
   const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/goal-savings`,
      {
         headers: {
            Authorization: `Bearer ${bearerToken}`,
            "device-token": deviceToken
         }
      }
      )
      .then((res) => {
         console.log(res)
         return {
            props: {
               goalData: res.data.data
            }
         }
      })
      .catch((error) => {
         console.log(error)
         return {
            props:{
               goalData: null
            }
            
         };
      });
 
   return  res
      
   
}

const GoalSavings = ({goalData }) => {

   console.log(
      goalData
   );
   const [filter, setFilter] = React.useState('all transactions');
   const [modalOpen, setModalOpen] = React.useState(false);
   const [searchResult, setSearchResult] = React.useState([]);
   const [loading, setLoading] = React.useState(false);
   const searchTerm = useSelector((state) => state.searchTerm);
   const [transactionDate, setTransactionDate] = React.useState("Oct 4, 2020");
   const [transactionTime, setTransactionTime] = React.useState("2:14pm");
   const [transactionType, setTransactionType] = React.useState("2:14pm");


   function BasicMenu({ viewLink = '', id = '' }) {
      const [anchorEl, setAnchorEl] = React.useState(null);

      const open = Boolean(anchorEl);

      const handleClick = (event) => {
         setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
         setAnchorEl(null);
      };


      const handleDeactivateAccount = async () => {
         setAnchorEl(null);
         setLoadingState(true)
         const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
         const bearerToken = process.env.NEXT_PUBLIC_BEARER_TOKEN;
         const deviceToken = process.env.NEXT_PUBLIC_DEVICE_TOKEN;

         const instance = axios.create({
            baseURL: `${baseUrl}`,
            headers: {
               Authorization: `Bearer ${bearerToken} `,
               "device-token": deviceToken
            }
         });
        
         await instance
            .post(`/api/v1/admin/users/delete/${id}`, {status: 'deactivated'})
            
            .then((res) => {
               console.log(res);
               setLoadingState(true)
               router.replace(router.asPath)
               toast.success('User deactivated successfully');
               

               return res.data
               
            })
            .catch((err) => {
               console.log(err);
              
            });
      };

      return (
         <div>
            <IconButton
               className='p-2'
               aria-controls={open ? 'basic-menu' : undefined}
               aria-haspopup='true'
               aria-expanded={open ? 'true' : undefined}
               onClick={handleClick}
            >
               <SVG.DotsHambugger />
            </IconButton>
            <Menu
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               MenuListProps={{
                  'aria-labelledby': 'basic-button',
               }}
               sx={{
                  '& .MuiList-root': {
                     padding: 0,
                  },
               }}
            >
               <div className='flex'>
                  <MenuItem onClick={handleClose} className='p-0'>
                     <Link href={viewLink}>
                        <a className='p-4'>
                           <SVG.View />
                        </a>
                     </Link>
                  </MenuItem>
                                   
               </div>
            </Menu>
         </div>
      );
   }


   const columns = React.useMemo(
      () => [
         {
            Header: 'User',
            accessor: 'user',
            Cell: ({ value }) => (
               <div className='flex justify-start items-center gap-2'>
                  <div className='h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] relative'>
                     <Image
                        src={`/images/${value[1]}.png`}
                        alt={value[0]}
                        layout='fill'
                     />
                  </div>
                  <span>{value[0]}</span>
               </div>
            ),
         },
         {
            Header: 'Service',
            accessor: 'service',
         },
         {
            Header: 'Amount',
            accessor: 'amount',
            Cell: ({ value }) => (
               <CurrencyFormat
                  value={value}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₦'}
               />
            ),
         },
         {
            Header: 'Payment Method',
            accessor: 'paymentMethod',
         },
         {
            Header: 'Date',
            accessor: 'date',
         },
         // {
         //    Header: 'Status',
         //    accessor: 'status',
         //    Cell: ({ value }) => {
         //       return (
         //          <span
         //             className={`px-2.5 py-1 lg:px-5 lg:py-2 rounded-full ${
         //                value === 'successful'
         //                   ? 'text-[#4AAE8C] bg-[#DEFFEE]'
         //                   : value === 'pending'
         //                   ? 'text-[#F7936F] bg-[#FDF6EF]'
         //                   : 'text-[#F16063] bg-[#FCEAE8]'
         //             }`}
         //          >
         //             {value}
         //          </span>
         //       );
         //    },
         // },
         {
            Header: 'Action',
            accessor: 'action',
            Cell: ({ value }) => (
               <BasicMenu id={value} viewLink={`/products/products/goalSavings/${value}`} />
            ),
         },
      ],
      []
   );

   const ChipCompo = ({ label }) => {
      return (
         <Chip
            label={label}
            className={`py-1 px-2 md:py-3 md:px-5 text-[10px] font-medium h-fit md:text-sm rounded-full ${
               filter === label.toLowerCase()
                  ? 'bg-[#FFE6D6] text-[#FF4500]'
                  : 'bg-[#EBF2FA] text-[#A6B7D4]'
            }`}
            clickable
            onClick={() => setFilter(label.toLowerCase())}
            sx={{
               '& .MuiChip-label': {
                  padding: 0,
               },
            }}
         />
      );
   };

   /**
    * Datagrid row data
    */
   let rows;
   // check if personalSavingData is an array
   if (typeof goalData === 'object' &&
   goalData && Array.isArray(goalData) ) {
      rows = goalData.map((item) => {
     
         return {
            user: [item.name, 'person1'],
            service: item?.deposit_account_details?.type,
            amount: item?.autosave_settings?.target_amount,
            paymentMethod: item?.deposit_account_type.toUpperCase(),
            date: item?.autosave_settings?.start_date,
            // status: item.transaction_history[0]?.status,
            action: item.account_id
            
         };
         
      });
   } else {
      rows = [];
   }
   
   console.log(rows)
   const filterData = useMemo(() => {
      if (filter === 'all transactions') {
         return rows;
      } else {
         return rows.filter((item) => item.status === filter);
      }
   }, [rows, filter]);

   useEffect(() => {
      if (!searchTerm) return;

      const result = tableSearch({
         searchTerm,
         dataList: filterData,
      });
      setSearchResult(result);
   }, [searchTerm, filterData]);

  
   return (
      <Layout
         pageLabel={
            <span className=' space-x-2 lg:space-x-3 '>
               <span>Products</span>
               <SVG.DoubleRight />
               <span>Products</span>
               {/* <SVG.DoubleRight />
               <span>Life Safe</span> */}
               <SVG.DoubleRight />{' '}
               <span className='text-[#999999]'>Goal Safe</span>
               
            </span>
         }
         title='Goal Safe'
      >
         <SubPageHeader label='Goal Safe' />

         <div className='md:flex md:justify-between md:items-center mt-2.5 md:mt-5 mb-5 md:mb-10'>
            <div className='space-x-2.5 lg:space-x-5'>
               <ChipCompo label='All transactions' />
               <ChipCompo label='Successful' />
               <ChipCompo label='Pending' />
               <ChipCompo label='Failed' />
            </div>

            {/* <Button
               onClick={() => setModalOpen(true)}
               startIcon={<SVG.Generate />}
               className='bg-[#FFE6D6] mt-2 md:mt-0 text-[#FF4500] normal-case py-1 px-2 md:py-3 md:px-5 text-[10px] font-medium md:text-sm tracking-[-0.025em]'
            >
               Generate receipt
            </Button> */}
         </div>

         <DataTable
            columns={columns}
            data={searchTerm ? searchResult : filterData}
         />


         <Modals
            open={modalOpen}
            setOpen={setModalOpen}
            loading={loading}
            title='Transaction detail'          
         >
            
           {
         //   goalData.map((personal) => {

            <div>
            <div className='flex justify-center'>
               {/* <div>user: {[item.name, 'person1']}</div>
               <img src={'person 1'} alt="" /> */}
               {/* <p>{personal.name}</p> */}
               <p>user</p>
            </div>
            <div className='flex flex-col gap-10'>

            <div className='flex justify-between'>
               <div className=''>
                  <h4>Transaction Date</h4>
                  <p></p>
               </div>

               <div>
                  <h4>Transaction Time</h4>
                  <p></p>
               </div>
            </div>


            <div className='flex justify-between'>
               <div className=''>
                  <h4>Transaction Amount</h4>
                  <p></p>
               </div>

               <div>
                  <h4>Transaction Reference</h4>
                  <p></p>
               </div>
            </div>

            <div className='flex justify-between '>
               <div className=''>
                  <h4>Transaction Type</h4>
                  <p></p>
               </div>

               <div>
                  <h4>Charges</h4>
                  <p></p>
               </div>
            </div>


            <div className='flex justify-between'>
               <div className=''>
                  <h4>Transaction Date</h4>
                  <p></p>
               </div>

               <div>
                  <h4>Transaction Date</h4>
                  <p></p>
               </div>
            </div>



            </div>

            </div>


           }           
        
         </Modals>
      </Layout>
   );
};

export default GoalSavings;
