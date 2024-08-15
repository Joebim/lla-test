import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';
import { Button } from '~/components/ui/button';
import { useQuestHook } from '~/hooks/quest/use-quest-hook';

const MissionBrief = () => {
  const {updateStartCountdown} = useQuestHook()

  return (
    <div className="w-full max-w-[500px] absolute left-1/2 right-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 z-[999]">
      <div className="relative">
        <div className="bg-black-140 absolute left-0 right-0 bg-opacity-50 text-center">
          <Image
            src="/images/modal-images/Frame 13.png"
            alt="Mission Brief"
            width={200}
            height={42}
            className="inline-block"
          />
        </div>
        <div className="bg-black-140 overflow-hidden rounded-lg bg-opacity-50">
          <div className="mt-16 rounded-lg border border-[#E27C40] bg-black bg-opacity-80 p-6 text-center text-white sm:p-8">
            <div className="mb-6 space-y-4">

              <Typewriter
                options={{
                  strings:` <p className="font-inter text-lg font-medium leading-normal tracking-[1.28px] text-[#BEBEBE] ">
                Welcome, Alex! A fire has broken out in an apartment
                building in your neighborhood. A baby is trapped inside and
                needs your help.
              </p>`,
                  autoStart: true,
                  delay:30,
                  cursor:''

                }}
              />
            </div>
            <Button size={"icon"} onClick={() => updateStartCountdown(true)} className='hover:brightness-150 active:scale-95'>
              <Image
                src="/images/modal-images/fast forward story.png"
                alt="Fast Forward"
                width={50}
                height={50}
                className="inline-block cursor-pointer"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionBrief