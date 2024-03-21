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
    <path d={'M15.705 7.41L14.295 6L8.295 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default ForwardRef
