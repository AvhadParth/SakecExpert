const Index = () => {
  // Add debugging to check if component renders
  console.log("Index component is rendering");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Preview Test - Component Loaded!</h1>
        <p className="text-xl text-muted-foreground">If you can see this, the preview is working!</p>
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">
          <p className="text-sm">Debug info: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
