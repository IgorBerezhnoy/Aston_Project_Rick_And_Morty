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
    <path d={'M6 6H8V18H6V6ZM9.5 12L18 18V6L9.5 12Z'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default ForwardRef
