import { Ref, SVGProps, forwardRef } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M6 18L14.5 12L6 6V18ZM16 6V18H18V6H16Z'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default ForwardRef
