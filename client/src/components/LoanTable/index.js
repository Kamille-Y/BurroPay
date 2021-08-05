import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./style.css";


const Data = (props) => {
    return (
        <div className='table'>
            <Table responsive>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Username</Th>
                        <Th>Borrower</Th>
                        <Th>Amount</Th>
                        <Th>Interest</Th>
                        <Th>Duration of Loan</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.loanData.map((loan,index) => {
                        return(
                            <Tr>
                                <Td>{index}</Td>
                                <Td>{loan.username}</Td>
                                <Td>{loan.borrower}</Td>
                                <Td>{loan.amount}</Td>
                                <Td>{(loan.interest) * 100}</Td>
                                <Td>{loan.months}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </div>
    );
};

export default Data;
