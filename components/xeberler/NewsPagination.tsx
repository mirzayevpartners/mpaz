import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
interface Props {
  currPage: number;
  count: number;
}

export function NewsPagination({ currPage, count }: Props) {
  // console.log(currPage, count);
  return (
    <Pagination>
      <PaginationContent>
        {currPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/xeberler/${currPage - 1}`} />
          </PaginationItem>
        )}
        {Array.from({ length: Math.ceil(count / 12) }).map((_, i) => {
          return (
            <PaginationItem key={i}>
              <PaginationLink isActive={i + 1 === currPage} href={`/xeberler/${i + 1}`}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {currPage < Math.ceil(count / 12) && (
          <PaginationItem>
            <PaginationNext href={`/xeberler/${currPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
