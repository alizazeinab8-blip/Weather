interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="mt-10 rounded-lg bg-red-100 p-4 text-red-600">
      {message}
    </div>
  );
};

export default Error;