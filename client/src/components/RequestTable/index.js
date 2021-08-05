import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import './style.css';


const Data = (props) => {
    return (
        <div className='table'>
            <Table responsive>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Username</Th>
                        <Th>Loaner</Th>
                        <Th>Amount</Th>
                        <Th>Interest</Th>
                        <Th>Duration of Loan</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.borrowData.map((borrows,index) => {
                        return(
                            <Tr>
                                <Td>{index}</Td>
                                <Td>{borrows.username}</Td>
                                <Td>{borrows.loaner}</Td>
                                <Td>{borrows.amount}</Td>
                                <Td>{(borrows.interest) * 100}</Td>
                                <Td>{borrows.months}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </div>
    );
};

export default Data;
