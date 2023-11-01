import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./AddressForm.css";

type AddressFormType = {
  userAddress?: string;
  userAge?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const AddressForm: FunctionComponent<AddressFormType> = ({
  userAddress,
  userAge,
  propTop,
}) => {
  const addressStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="address9" style={addressStyle}>
      <div className="address-child6" />
      <div className="address10">{userAddress}</div>
      <div className="zboncak1">{userAge}</div>
    </div>
  );
};

export default AddressForm;
