import { observer } from 'mobx-react-lite';
import React, { useContext, useMemo, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '..';
import { SetPageCount, setPagesArray } from '../utils/pages';

const Pages = observer(() => {
  const { device } = useContext(Context);
  const [pages, setPages] = useState([]);

  useMemo(() => {
    const totalPage = SetPageCount(device.totalCount, device.limit);
    setPages(setPagesArray(totalPage));
  }, [device.totalCount, device.limit]);

  return (
    <Pagination className='mt-3'>
      {pages.map((e) => (
        <Pagination.Item
          onClick={() => device.setPage(e)}
          active={device.page === e}
          key={e}
        >
          {e}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
