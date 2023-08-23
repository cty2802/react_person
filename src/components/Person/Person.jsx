import './Person.scss';

const MAN_GENDER = 'm';

function getMarriedInfo(status, gender, companion) {
  if (status) {
    return gender === MAN_GENDER
      ? `${companion} is my wife`
      : `${companion} is my husband`;
  }

  return 'I am not married';
}

export const Person = ({ person }) => {
  const {
    name,
    age,
    isMarried,
    sex,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {getMarriedInfo(isMarried, sex, partnerName)}
      </p>
    </section>
  );
};
