import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

function UserList() {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user, i) => {
            return (
              <ListGroupItem className="d-flex" key={i}>
                <strong>{user.name}</strong>
                <div className="ml-auto">
                  <Link className="btn btn-warning" to={`/edit/${user.id}`}>
                    Edit
                  </Link>
                  <Button
                    onClick={() => removeUser(user.id)}
                    color="danger"
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </Button>
                </div>
              </ListGroupItem>
            );
          })}
        </>
      ) : (
        <h4 className="text-center">NO USERS</h4>
      )}
    </ListGroup>
  );
}

export default UserList;
