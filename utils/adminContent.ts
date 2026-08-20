export type ContactSettings = {
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  meetingDays: string;
  meetingHours: string;
  address: string;
  mapUrl: string;
};

export type FeeItem = {
  title: string;
  price: string;
  description: string;
};

export type FeeSection = {
  title: string;
  items: FeeItem[];
};

export type StudyLevelSetting = {
  key: string;
  title: string;
  description: string;
  courses: string[];
};

export type AdminContent = {
  contacts: ContactSettings;
  fees: FeeSection[];
  studyLevels: StudyLevelSetting[];
};

export const ADMIN_CONTENT_KEY = "ais-admin-content";
export const ADMIN_SESSION_KEY = "ais-admin-session";
export const ADMIN_PASSWORD = "ais-admin-2026";

export const getStoredAdminContent = (): Partial<AdminContent> => {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(ADMIN_CONTENT_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export const saveStoredAdminContent = (content: AdminContent) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ADMIN_CONTENT_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event("ais-admin-content-updated"));
};

export const defaultContacts = (t: (key: string) => string): ContactSettings => ({
  phonePrimary: t("Contact.Contacts.Call.Description1"),
  phoneSecondary: t("Contact.Contacts.Call.Description2"),
  email: t("Contact.Contacts.Email.Description1"),
  meetingDays: t("Contact.Contacts.Meeting.Description1"),
  meetingHours: t("Contact.Contacts.Meeting.Description2"),
  address: t("Contact.Contacts.Meeting.Description3"),
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062.784001361683!2d101.70160315987847!3d3.1811413772820534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc496ec68f95b9%3A0x700d8de6e4eb4ef6!2sAl-Aqsa%20Integrated%20School!5e0!3m2!1sen!2sjo!4v1693287795800!5m2!1sen!2sjo",
});

export const defaultFees = (t: (key: string) => string): FeeSection[] => [
  {
    title: t("Engage.Fees.FirstTime.Title"),
    items: [
      ["Reg", "Placement", "Deposit1", "Deposit2", "Visa"].map((key) => ({
        title: t(`Engage.Fees.FirstTime.${key}.Title`),
        price: t(`Engage.Fees.FirstTime.${key}.Price`),
        description: t(`Engage.Fees.FirstTime.${key}.Description`),
      })),
    ].flat(),
  },
  {
    title: t("Engage.Fees.Yearly.Title"),
    items: ["Book1", "Book2", "Book3", "Uniform", "Visa"].map((key) => ({
      title: t(`Engage.Fees.Yearly.${key}.Title`),
      price: t(`Engage.Fees.Yearly.${key}.Price`),
      description: t(`Engage.Fees.Yearly.${key}.Description`),
    })),
  },
  {
    title: t("Engage.Fees.Bus.Title"),
    items: [
      {
        title: t("Engage.Fees.Bus.KL.Title"),
        price: t("Engage.Fees.Bus.KL.Price"),
        description: t("Engage.Fees.Bus.KL.Description"),
      },
    ],
  },
  {
    title: t("Engage.Fees.Tuition.Title"),
    items: ["KG", ...Array.from({ length: 12 }, (_, index) => `Level${index + 1}`)].map((key) => ({
      title: t(`Engage.Fees.Tuition.${key}.Title`),
      price: t(`Engage.Fees.Tuition.${key}.Price`),
      description: t(`Engage.Fees.Tuition.${key}.Description`),
    })),
  },
];

export const defaultStudyLevels = (t: (key: string) => string): StudyLevelSetting[] => [
  {
    key: "KG",
    title: t("Academics.StudyLevels.KG.Title"),
    description: t("Academics.StudyLevels.KG.Description"),
    courses: Array.from({ length: 5 }, (_, index) =>
      t(`Academics.StudyLevels.KG.Courses.Course${index + 1}`),
    ),
  },
  {
    key: "Levels1To2",
    title: t("Academics.StudyLevels.Levels1To2.Title"),
    description: t("Academics.StudyLevels.Levels1To2.Description"),
    courses: Array.from({ length: 8 }, (_, index) =>
      t(`Academics.StudyLevels.Levels1To2.Courses.Course${index + 1}`),
    ),
  },
  {
    key: "Levels3To6",
    title: t("Academics.StudyLevels.Levels3To6.Title"),
    description: t("Academics.StudyLevels.Levels3To6.Description"),
    courses: Array.from({ length: 12 }, (_, index) =>
      t(`Academics.StudyLevels.Levels3To6.Courses.Course${index + 1}`),
    ),
  },
  {
    key: "Levels7To12",
    title: t("Academics.StudyLevels.Levels7To12.Title"),
    description: t("Academics.StudyLevels.Levels7To12.Description"),
    courses: Array.from({ length: 16 }, (_, index) =>
      t(`Academics.StudyLevels.Levels7To12.Courses.Course${index + 1}`),
    ),
  },
];

export const mergeAdminContent = (
  fallback: AdminContent,
  stored: Partial<AdminContent>,
): AdminContent => ({
  contacts: { ...fallback.contacts, ...stored.contacts },
  fees: stored.fees?.length ? stored.fees : fallback.fees,
  studyLevels: stored.studyLevels?.length ? stored.studyLevels : fallback.studyLevels,
});
