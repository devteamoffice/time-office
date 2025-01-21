import React, { useState, useEffect } from "react";
import Navigation from "../../components/Common/Navigation";
import axios from "axios";
import { API_URL } from "../../constants";
import Export from "../../components/Common/Export";
import ListTable from "../../components/Query/ListTable";
const ContactList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [contacts, setContacts] = useState([]); // Store contact data
  const itemNo = 10; // Items per page

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/contact/queries?page=${currentPage}&limit=${itemNo}`
        );
        setContacts(response.data.contacts); // Assuming backend returns { contacts: [] }
        setTotalItems(response.data.totalItems); // Assuming backend returns { totalItems: number }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, [currentPage]); // Refetch data when page changes

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center gap-1">
              <h4 className="card-title flex-grow-1">All Contact Queries</h4>

              <Export tableData={contacts} fileName="contacts_list" />
            </div>
            <div>
              <div className="table-responsive">
                <ListTable contacts={contacts} />{" "}
                {/* Update this to render contact list */}
              </div>
            </div>
            <div className="card-footer border-top">
              <Navigation
                totalItems={totalItems}
                itemNo={itemNo}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
