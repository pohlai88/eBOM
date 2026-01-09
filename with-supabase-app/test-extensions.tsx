// Extension Functionality Test File
// This file is used to test VS Code extension functionality

import React from "react";
import { Button } from "@/components/ui/button";

// Test 1: Tailwind CSS IntelliSense
// Type "bg-" below and verify autocomplete appears
const TestComponent = () => {
  return (
    <div className="bg-primary text-primary-foreground p-4 rounded-lg">
      {/* Test Tailwind autocomplete - type className="bg- */}
      <Button variant="default" size="lg">
        Click Me
      </Button>
    </div>
  );
};

// Test 2: ESLint - This should show an error (unused variable)
const unusedVariable = "test";

// Test 3: Path Intellisense - Type "@/components" and verify autocomplete
// import { Something } from "@/components

// Test 4: Auto Import - Type "useState" and verify import suggestion
const TestHook = () => {
  // Type useState here and see if auto-import works
  return null;
};

// Test 5: Error Lens - Check if errors show inline
const testFunction = (param: string) => {
  // This should show type error if you pass a number
  return param.length;
};

// Test 6: TODO Highlight - This should be highlighted
// TODO: Complete this test
// FIXME: Fix this later

export default TestComponent;
