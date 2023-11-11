import './InputError.scss';

type InputErrorProps = { text?: string}

const InputError = ({text="Ошибка"}:InputErrorProps) => {
    return (
        <span className='input-error'>
      {text}
    </span>
    );
};

export default InputError;
