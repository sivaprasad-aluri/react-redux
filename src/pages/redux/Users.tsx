import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "../../features/users/usersThunks";
import { Box, Card, CardContent, Typography } from "@mui/material";
import user from "../../assets/user.png";

const Users = () => {
  const dispatchUsers = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatchUsers(fetchUsers());
  }, [dispatchUsers]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Box display="flex" gap={5} flexWrap="wrap" mt={10} p={5}>
      {users &&
        users.map((v) => (
          <Card
            key={v.id}
            sx={{
              width: 270,
              minHeight: 300,
              padding: 0,
              margin: 0,
              borderRadius: "8%",
            }}
          >
            <CardContent sx={{ padding: 1 }}>
              <Box
                height="230px"
                maxHeight={"250px"}
                maxWidth="100%"
                bgcolor="gray"
                borderRadius={"8%"}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img src={user} alt="image" width={"80%"} />
              </Box>
              <Box mt={2} textAlign="left" pl={2}>
                <Typography variant="subtitle1"> {v.name}</Typography>
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  {v.email}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  {v.phone}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default Users;
