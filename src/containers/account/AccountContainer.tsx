import React from 'react';
import { BriefCaseFillSvg, GearFillSvg, HouseCircleFillSvg, Person3FillSvg, PersonFillSvg } from '../../assets/svg';
import PageHeader from '../../components/base/PageHeader';
import ItemWithArrow from '../../components/common/ItemWithArrow';
import RoundedView from '../../components/common/RoundedView';

function AccountContainer() {
  return (
    <div className='grid gap-4'>
      <PageHeader className='text-rouge flex items-center justify-between p-3'>
        <div>Terms</div>
        <div className='font-bold'>Your ACCOUNT</div>
        <div>Sign out</div>
      </PageHeader>
      <RoundedView className='bg-white text-black py-4 grid gap-2'>
        <div className='text-center font-bold'>COMPANY PROFILE</div>
        <ItemWithArrow Icon={PersonFillSvg}>
          <span className='font-bold mr-2'>JEF</span>
          <span>jfloubeyre@id-logistics.com</span>
        </ItemWithArrow>
        <ItemWithArrow Icon={HouseCircleFillSvg}>
          <span className='font-bold mr-2'>JEF</span>
          <span>jfloubeyre@id-logistics.com</span>
        </ItemWithArrow>
        <ItemWithArrow Icon={BriefCaseFillSvg}>
          <span className='font-bold mr-2'>JEF</span>
          <span>jfloubeyre@id-logistics.com</span>
        </ItemWithArrow>
        <ItemWithArrow Icon={GearFillSvg}>
          <span className='font-bold mr-2'>JEF</span>
          <span>jfloubeyre@id-logistics.com</span>
        </ItemWithArrow>
        <ItemWithArrow Icon={Person3FillSvg}>
          <span className='font-bold mr-2'>JEF</span>
          <span>jfloubeyre@id-logistics.com</span>
        </ItemWithArrow>
      </RoundedView>
    </div>
  );
}

export default AccountContainer;
