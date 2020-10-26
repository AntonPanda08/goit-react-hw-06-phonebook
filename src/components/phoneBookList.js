import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PhoneBookItem from "./phoneBookItem";
import contactAction from "../redux/contacts/contactAction";
import styles from "./phonebookList.module.css";

const PhoneBookList = ({ contacts, onRemoveContact }) => (
  <TransitionGroup component="ul" className={styles.phoneBookList}>
    {contacts.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames={styles}>
        <PhoneBookItem
          id={id}
          number={number}
          name={name}
          onRemoveContact={() => onRemoveContact(id)}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

PhoneBookList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items.filter((contact) =>
    contact.name
      .toLowerCase()
      .includes(state.contacts.filter.toLocaleLowerCase())
  ),
});
const mapDispatchToProps = {
  onRemoveContact: contactAction.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookList);
