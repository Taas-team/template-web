import React, { useCallback, useMemo } from 'react';
import { Table } from '../../../../common/components';

export const DishListItem = () => {
    const columns = useMemo(() => ['categorie', 'repas', 'prix'], []);

    const renderTable = useCallback(() => <Table resource="orders" fields={columns}/>, []);

    return (
        <>
            {renderTable()}
        </>
    )
}