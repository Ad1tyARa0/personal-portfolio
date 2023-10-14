export type SkillsType = {
  data: {
    id?: string;

    category: {
      text: string;
    };

    category_items: CategoryItemInterface[];
  };
};

interface CategoryItemInterface {
  image: {
    url: string;
    alt: string;
  };

  title: {
    text: string;
  };
}
