'use client';

import { useConvexAuth } from 'convex/react';
import { redirect } from 'next/navigation';
import React from 'react'

import { Spinner } from '@/components/ui/spinner';

import { Navigation } from './_components/navigation';

 const Layout = ({children}: {children : React.ReactNode}) => {
  const {isLoading, isAuthenticated} = useConvexAuth();

  if(isLoading){
    return (
      <div className='h-full flex items-center justify-center'>
        <Spinner size={"lg"}/>
      </div>
    )
  }

  if(!isAuthenticated){
    return redirect("/");
  }

  return (
    <div className='h-full flex dark:bg-[#1F1F1F] '>
      <Navigation/>
      <main className='flex-1 h-full overflow-y-auto'>
      {children}
      </main>
    </div>
  )
}

export default Layout;
