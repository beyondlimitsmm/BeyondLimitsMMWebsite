import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <section className="AboutUs py-10 md:py-20" id="aboutUs">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="mb-6 rounded-2xl bg-neutral2 px-4 py-2 md:px-10">
          <h1 className="text-primaryDarkBlue md:text-4xl">
            Make an impact with Beyond Limits Technologies.
          </h1>
          <h1 className="text-primaryDarkBlue md:text-4xl">
            Join us on a journey towards digital transformation !
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AboutUsCard
            title="Our vision"
            body="To become a global leader in software development, recognized for our unwavering commitment to innovation, quality, and customer success, while inspiring others to push the boundaries of what technology can achieve."
          ></AboutUsCard>
          <AboutUsCard
            title="Our history"
            body="Beyond Limits Technologies began as a small startup with a grand vision. With determination, hard work, and a relentless pursuit of excellence, we've grown into a trusted software development partner for businesses across various industries. Our success is built ona foundation of passion, expertise, and an unwavering commitment to our clients."
          ></AboutUsCard>
          <AboutUsCard
            title="About us"
            body="Beyond Limits Technologies is dedicated to empowering businesses with innovative, tailor-made software solutions that propel them towards success. Our mission is to create cutting-edge, reliable, and scalable digital products that elevate our clients' operations and help them stay ahead of the curve in an increasingly competitive landscape."
          ></AboutUsCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export const AboutUsCard = ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => {
  return (
    <div className="min-h-[260px] rounded-2xl bg-neutral2 p-4 ">
      <h4 className="text-primary">{title}</h4>
      <div className="my-4 border-b border-l-neutral8"></div>
      <h5 className="text-text-primary85">{body}</h5>
    </div>
  );
};
