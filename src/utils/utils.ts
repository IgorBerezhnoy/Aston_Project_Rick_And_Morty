export const getPageSize = (count: number, pages: number) => Math.ceil(count / pages)
export const checkIsDesktop = (width: number) => width > 910
