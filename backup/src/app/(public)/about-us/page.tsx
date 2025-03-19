import React from "react";

const data = {
  title: "Essence of ParentMe36O",
  description:
    "Coordination and collaboration between activities that children learn should be the key factor in addressing children’s growth and development. As a matter of fact, the schools provide a lot of exposure to children but each facility offered to children are independent of each other. That is, service coordination should go beyond providing a skill, from multidisciplinary teams to between organisations.",
  image: "",
  subData: [
    {
      subTitle: "WHAT IS ParentMe36O",
      desc: [
        "Each parent is most grateful to be blessed with wonderful children in their lives and pray for their happiness, joys, achievements each moment, each day. We constantly worry for the well being of our loved ones and realise our utmost responsibility to take care and guide our children in the best way.",
        "And in this challenge of doing everything right, loving them unconditionally, fulfilling everything they desire, we sometimes question our own decision. Am I buying them too many gifts? Am I teaching my family values properly? Am I navigating my child's career in the right direction? Am I managing my own success, parental meltdown, work pressure, relationships well? Are there any forces which pull me away from my everyday goals adding to frustration? Do my stress levels affect my family? What is the best way to create a perfect parenting balance?",
        "ParentMe36O takes care of your emotional nourishment as a parent. We hear you, empathise with you, melt away your worries and stresses as adults and strengthen you more with successful parenting strategies. ParentMe36O empowers you for time management and constructively substitutes your time with your little ones by engaging your child with interesting activities designed to nourish not only their cognitive skills and interests but most importantly their emotional needs. We also stitch together your child’s growth chart and present a holistic curve to you!",
      ],
    },
    {
      subTitle: "How does ParentMe36O function",
      desc: [
        "ParentMe36O has professionals who are experienced teachers with decades of experience in engaging and knowing children. Parents enrol their children for two activities each day. The parents are provided regular feedback on their child’s progress on the skill and most importantly their emotional and social involvement. The teachers make sure they encourage each child for participation.",
        "By the end of the annual engagement with ParentMe36O professionals, parents also get feedback on a likely career orientation on their child’s ability and aptitude. Research has proven that career information service reduces the psychosocial problems that may occur in childhood considerably.",
        "ParentMe36O counselling department offers practical advice for parents of growing children through webinars, one-on-one counselling sessions for children of all ages and their parents.",
        "Browse our topics for answers to some common parenting questions! If you are parenting a child with special or additional needs, we hope that you will find ParentMe36O helpful in terms of special education, play therapy, speech and language development.",
      ],
    },
    {
      subTitle: "NEED FOR PARENTME36O",
      desc: [
        "Parents and children of today are experiencing a crisis of connectedness. I, as a counselor, often hear from parents:",
        "My child told me each detail when he returned from school in his kindergarten days. But now as he’s in class 9, I have to read his expressions.",
        "She enacted her classroom and her teacher at home with me till grade 2. Now when she’s in class 10, she asks me why I am entering her room?",
        "Do these comments resonate with you too?",
        "You are not at fault. Just that you are not aware enough how to parent this new generation of kids!",
        "ParentMe36O takes counselling as the heart of the entire program and has woven emotional nourishment of children in the activities like storytelling, personality development and many more. Our teacher-counsellors observe and interact with your child, professional counsellors create their profile and we provide holistic feedback about your child. We counsel parents, we counsel children and we counsel families as a whole.",
        "Interestingly, most people take counselling as advising solutions to problems. ParentMe36O does not believe in giving advice. We help parents find appropriate solutions to their concerns by equipping them with parenting strategies to work effectively with their children. We totally empathise with you when you’re in stress. We support you to settle your emotional brain and get your logical, active thinking mind back in action so that you make the right decisions in the best interest of your family considering the situation.",
        "As holistic development of our growing children is the need of the hour, we have designed various engaging activities keeping New Education Policy in mind to bring up skillful, creative and receptive students.",
      ],
    },
  ],
};

const AboutUsPage = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 sm:px-10 lg:px-16 mx-auto max-w-4xl flex flex-col gap-6">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary">
        {data.title}
      </h1>
      
      {/* Description */}
      <p className="text-base sm:text-lg text-gray-700">{data.description}</p>

      {/* Sections */}
      {data.subData.map((item, index) => (
        <div key={index} className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            {item.subTitle}
          </h2>
          {item.desc.map((paragraph, i) => (
            <p key={i} className="text-base sm:text-lg text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </section>
  );
};

export default AboutUsPage;
