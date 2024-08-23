import Ripple from "@/components/magicui/ripple";
import classes from '@/components/example/rippledemo.module.css'
import ShimmerButton from "../magicui/shimmer-button";
 
export function RippleDemo() {
  return (
    <div className="relative flex h-[1000px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"> 
     <div className="z-20 flex justify-evenly  my-8 left-0 h-full w-full bg-white/10">
          <ul>
            <li className="text-2xl">Logo</li>
          </ul>
          <ul className={classes.omo}>
            <li>About</li>
            <li>Portfolio</li>
          </ul>
          <ul>
            <li>
            <ShimmerButton>
                <a
                  href="mailto:drufus015@gmail.com"
                  className=""
                >
                  drufus015@gmail.com
                </a>
              </ShimmerButton>
            </li>
          </ul>
     </div>
      <p className="whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black font-monument">
        Ripple
      </p>
      <Ripple />
    </div>
  );
}