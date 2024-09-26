import React from 'react'

export default function () {
  return (
    <>
    <div className='row'>
        <audio src=""></audio>
        <div className="container">
            <div className='flex sm:flex-col gap-4'>
                <div className="w-full">
                    <div className="text-[#032b41] mb-4 font-semibold text-[32px]">
                        BOOK TITLE
                    </div>
                    <div className="text-[#032b41] mb-4 font-semibold">
                        AUTHOR
                    </div>
                    <div className="text-[20px] text-[#032b41] mb-4 font-normal">
                        SUB-TITLE
                    </div>
                    <div className="border-t-[#e1e7ea] border-b-[#e1e7ea] px-4 mb-6">
                        <div className="flex flex-wrap max-w-[400px] gap-x-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
