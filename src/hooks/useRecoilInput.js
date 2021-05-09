import { useRecoilState } from "recoil";

export default (recoilState) => {
  const [value, setValue] = useRecoilState(recoilState);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange, setValue };
};
