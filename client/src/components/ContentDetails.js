import { Avatar, Typography, Tooltip } from "@mui/material";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai"; // Ensure to install this icon library

<<<<<<< HEAD
const ContentDetails = ({ username, createdAt, edited, preview, isAdmin }) => {
  return (
    <HorizontalStack sx={{ alignItems: 'center' }}>
=======
const ContentDetails = ({ username, edited, preview, isAdmin }) => {
  return (
    <HorizontalStack sx={{ alignItems: 'center' }}>
      {/* Add SEO meta tags for better visibility */}
      
      {/* Schema.org structured data for better SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Comment",
            "author": {
              "@type": "Person",
              "name": "${username}",
              "url": "https://sraws.com/users/${username}"
            },
            "text": "User comment or post content goes here",
            "publisher": {
              "@type": "Organization",
              "name": "Sraws",
              "url": "https://sraws.com"
            }
          }
        `}
      </script>

      {/* User Avatar and details */}
>>>>>>> d412097de (1.5)
      <UserAvatar width={30} height={30} username={username} />
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        <Link
          color="inherit"
          underline="hover"
          onClick={(e) => {
            e.stopPropagation();
          }}
          to={`/users/${username}`}
        >
          {username}
          {isAdmin && (
            <Tooltip title="Verified User">
              <AiFillCheckCircle style={{ color: 'green', marginLeft: '8px' }} />
            </Tooltip>
          )}
        </Link>
        {!preview && edited && <>(Edited)</>}
      </Typography>
    </HorizontalStack>
  );
};

export default ContentDetails;
