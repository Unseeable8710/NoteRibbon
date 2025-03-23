# NoteRibbon

## About

I created NoteRibbon on March 23, 2025 because I wanted a much cleaner user interface for the palettes that Noteflight uses in the score editor. I wanted to make a UI that made sense, so I went with a ribbon (a type of UI made of tabs and toolbars), similar to what you would see in Office apps and the File Explorer in Windows 8, 8.1, and 10.

### Versioning system

I'm using my own version of the semantic versioning system to version this project. The structure is pretty simple.

#### Stable releases

The structure of a stable release is `major.minor.patch_build`, which is actually just semantic versioning with an underscore instead of a dot for the build number. A major release is a release that brings a huge change to the software, and is usually considered something of a turning point, therefore NoteRibbon will most likely stay at `1.x.x_x` and maybe `2.x.x_x`. A minor release is a release that brings a smaller change to the software. A patch release is a release that brings bugfixes to an existing release. In this project, the build number is the number that increments with every commit. An example stable release: `v1.5.2_74`.

#### Pre-releases

You might be wondering why I decided to use an underscore for the build number. Well, the answer is consistency. This is because the structure of a pre-release is `major.minor.patch-bN_build` for a beta release<sup>[1](#1)</sup> and `major.minor.patch-rcN_build` for a release candidate<sup>[2](#2)</sup>, where `rc` stands for "release candidate" and `N` is the pre-release number.

## Status

### Metadata

Complete

### Code

#### Ribbon

Not started

#### Settings menu

Not started

## Documentation

Go to the [wiki](https://github.com/Unseeable8710/NoteRibbon/wiki) for documentation on how to use NoteRibbon.

## Gallery

## Footnotes

### 1

In this project, a beta release is a pre-release meant for testing. There are most certainly bugs in a beta release, so betas are released for the community to test and provide feedback on.

### 2

A release candidate is a pre-release that *supposedly* doesn't contain any more bugs, but it isn't ready to be a stable release. When a release candidate number increments, it means that one or more new features were added and more are planned before the stable release.
