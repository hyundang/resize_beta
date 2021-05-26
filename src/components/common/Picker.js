import React from "react";
import styled from "styled-components";
// for picker
import Select, { components } from "react-select";
// assets
import ic_dropdown from "../../assets/icons/dropdown.svg";
import ic_delete from "../../assets/icons/ic-delete.svg";

const Picker = ({
  options,
  placeholder,
  isMulti,
  isSearchable,
  inputData,
  setInputData,
}) => {
  const customStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      marginBottom: "0.8rem",
      border: "0.1rem solid #dddddd",
      borderRadius: "0.3rem",
      fontSize: "1.4rem",
      fontWeight: "400",
      letterSpacing: "-0.035rem",
      color: "#191919",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: "15",
      marginBottom: "4rem",
    }),
  };

  const IndicatorsContainer = (props) => {
    return (
      <div style={{ height: "4.8rem", padding: "0" }}>
        <components.IndicatorsContainer {...props} />
      </div>
    );
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator
        {...props}
        getStyles={(styles) => ({ ...styles, padding: "0rem" })}
      >
        <img src={ic_dropdown} />
      </components.DropdownIndicator>
    );
  };

  const ClearIndicator = (props) => {
    return (
      <components.ClearIndicator
        {...props}
        getStyles={(styles) => ({ ...styles, padding: "0rem" })}
      >
        <img src={ic_delete} style={{ width: "2rem", height: "2rem" }} />
      </components.ClearIndicator>
    );
  };

  return (
    <>
      <Select
        className="Picker"
        styles={customStyles}
        components={{
          DropdownIndicator,
          IndicatorsContainer,
          ClearIndicator,
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: "0.3rem",
          colors: {
            ...theme.colors,
            primary: "#767676",
          },
        })}
        options={options}
        placeholder={placeholder}
        isMulti={isMulti}
        isSearchable={isSearchable}
        closeMenuOnSelect={false}
        closeMenuOnScroll={true}
        value={inputData}
        onChange={setInputData}
      />
    </>
  );
};

export default Picker;

const SelectBox = styled.div`
  width: 100%;
  height: 4.8rem;
  padding: 1.4rem 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray_1};
  border-radius: 0.3rem;

  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: -0.035rem;
  color: ${({ theme }) => theme.colors.black};
`;
