import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className="title">
    {title}
    {children}
  </section>
);
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
