import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card, List, Button } from "antd";

const NoteContent = styled.p`
  max-height: 200px;
  overflow-y: auto;
  cursor: pointer;
`;

function Note({ title, children, loading, onClick, onDelete }) {
  return (
    <List.Item onClick={onClick}>
      <Card
        title={title}
        extra={
          <Button
            type="dashed"
            shape="circle"
            icon="delete"
            onClick={onDelete}
          />
        }
        loading={loading}
      >
        <NoteContent>{children}</NoteContent>
      </Card>
    </List.Item>
  );
}

Note.defaultProps = {
  loading: false,
  onClick: () => {},
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

export default Note;
