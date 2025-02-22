# TypeScript Spread Syntax Type Error

This repository demonstrates a subtle type error in TypeScript that can occur when using the spread syntax with arrays containing mixed types.  TypeScript's type inference doesn't always catch these errors at compile time, leading to runtime issues.

## Problem

The `combine` function is designed to concatenate two number arrays. However, the second array (`arr2`) contains a string ("6"), which causes a runtime type error.  TypeScript's compiler fails to detect this issue, allowing the code to compile without errors.