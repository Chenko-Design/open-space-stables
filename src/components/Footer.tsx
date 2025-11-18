const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-lg mb-2">חוות סוסים טיפולית</p>
        <p className="text-primary-foreground/80">
          מקום של הכלה, הקשבה וצמיחה © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
