---
title: "INOCULUM Project Kicks Off"
date: 2026-05-15
summary: "The INOCULUM project has officially started at INESC TEC, beginning research on a secure-by-design storage system resilient to ransomware."
tags: ["milestone", "announcement"]
---

We are pleased to announce the official kick-off of the **INOCULUM** project — *Boosting the Immunity of Storage Systems Against Ransomware* — funded under the NORTE 2030 programme (NORTE2030-FEDER-00868400), with a start date of **May 15, 2026**.

## About the Project

INOCULUM will research and develop secure-by-design storage systems tailored for high-performance storage appliances, designed from the ground up to be resilient against ransomware attacks. Unlike existing detection or avoidance solutions, INOCULUM ensures that data is **always recoverable** — without relying on periodic backups, snapshot schedules, or costly cloud storage services.

The core innovation is a Copy-on-Write (CoW) storage strategy where every data modification produces an immutable copy. Ransomware that successfully encrypts files will always write to a new version, leaving all previous content intact and recoverable. This approach is complemented by high-performance and cost-efficient I/O research — exploring frameworks such as **SPDK** and **io_uring** and techniques such as data **compression** and **deduplication**— to make the security guarantees practical for data-intensive applications and the infrastructures supporting these.


## Research Team

The project is led by **João Paulo** (Principal Investigator, Assistant Professor at University of Minho and Senior Researcher at INESC TEC), with a multidisciplinary team of researchers from INESC TEC combining expertise in storage systems, cybersecurity, and machine learning.

## What's Next

Follow the team's broader research at [DSR/HASLab](https://dsr-haslab.github.io).
