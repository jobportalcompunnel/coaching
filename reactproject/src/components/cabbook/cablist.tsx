import React, { useMemo, useReducer, useState } from 'react';
import "./dashboard.css";
import { useNavigate } from 'react-router-dom';
const DUMMY_DRIVERS = [
  { id: 1, name: 'John Doe', cabNumber: 'DL1A-1234', rating: 4.8 },
  { id: 2, name: 'Jane Smith', cabNumber: 'UP80-5678', rating: 3.5 },
  { id: 3, name: 'Peter Jones', cabNumber: 'MH01-9012', rating: 5.0 },
  { id: 4, name: 'Mary Williams', cabNumber: 'KA02-3456', rating: 4.1 },
  { id: 5, name: 'Robert Brown', cabNumber: 'RJ14-7890', rating: 4.9 },
  { id: 6, name: 'Patricia Davis', cabNumber: 'TS07-2345', rating: 4.2 },
  { id: 7, name: 'David Wilson', cabNumber: 'WB04-6789', rating: 3.9 },
];

const CabList = () => {
  const [drivers] = useState(DUMMY_DRIVERS);
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3; // Number of rows to display per page
  const navigate = useNavigate();

  // Memoized filtered data to avoid re-calculating on every render
  const filteredDrivers = useMemo(() => {
    if (!filterText) {
      return drivers;
    }
    const lowercasedFilter = filterText.toLowerCase();
    return drivers.filter(driver =>
      driver.name.toLowerCase().includes(lowercasedFilter) ||
      driver.cabNumber.toLowerCase().includes(lowercasedFilter)
    );
  }, [drivers, filterText]);

  // Pagination logic
  const totalPages = Math.ceil(filteredDrivers.length / rowsPerPage);
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return filteredDrivers.slice(startIndex, endIndex);
  }, [filteredDrivers, currentPage, rowsPerPage]);

  const handleEdit = (driverId: any) => {
    console.log(`Editing driver with ID: ${driverId}`);
    const editDrivers = DUMMY_DRIVERS.filter(iditem => iditem.id == driverId);
    if (driverId < 3) {
      navigate(`/cab/cab-edit-formik/${driverId}`, {
        state: { driverData: editDrivers[0] }
      });
    } else {
      navigate(`/cab/cab-edit-react-hook-form/${driverId}`, {
        state: { driverData: editDrivers[0] }
      });
    }
  };

  const handleFilterChange = (e: any) => {
    setFilterText(e.target.value);
    dispatch({type: "increment"})
    setCurrentPage(1); // Reset to the first page on filter change
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const initialState = {count:0};
  const reducer = (state: any, action: any) =>{
    switch(action.type){
      case "increment":{
        return {...state, count : state.count+1}
      }
      case "decrement":{
        return {...state, count : state.count-1}
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-header">Cab Driver Dashboard {state.count}</h1>

        {/* Filter Input */}
        <div className="filter-container">
          <input
            type="text"
            placeholder="Filter by name or cab number..."
            value={filterText}
            onChange={handleFilterChange}
            className="filter-input"
          />
        </div>

        {/* Driver Table */}
        <div className="table-wrapper">
          <table className="driver-table">
            <thead className="table-head">
              <tr>
                <th scope="col" className="table-header">
                  Driver Name
                </th>
                <th scope="col" className="table-header">
                  Cab Number
                </th>
                <th scope="col" className="table-header">
                  Rating
                </th>
                <th scope="col" className="table-header">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map(driver => (
                  <tr key={driver.id} className="table-body-row">
                    <td className="table-cell cell-text-bold">
                      {driver.name}
                    </td>
                    <td className="table-cell cell-text-normal">
                      {driver.cabNumber}
                    </td>
                    <td className="table-cell cell-text-normal">
                      {driver.rating}
                    </td>
                    <td className="table-cell">
                      <button
                        onClick={() => handleEdit(driver.id)}
                        className="action-button"
                        aria-label={`Edit ${driver.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="action-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-3.11 3.11l-5.6 5.6a1 1 0 00-.289.467l-1.5 5a1 1 0 001.182 1.182l5-1.5a1 1 0 00.467-.289l5.6-5.6-2.83-2.828z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="table-cell no-data-cell">
                    No drivers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {filteredDrivers.length > rowsPerPage && (
          <div className="pagination-container">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`pagination-button ${currentPage === i + 1 ? 'active' : ''
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-button"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CabList;