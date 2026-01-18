"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle } from "lucide-react"

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl font-semibold text-foreground mb-4">Application Submitted!</h2>
          <p className="text-lg text-muted-foreground">
            Thank you for your interest in the FinaPilot Design Partner Program. We review every application personally
            and will be in touch soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Apply to Join the Design Partner Program
          </h2>
          <p className="text-lg text-muted-foreground">
            Limited to 10 partners. We review every application personally.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-background rounded-xl border border-border p-6 sm:p-8">
          <div className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="John Smith" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input id="company" placeholder="Acme Inc." required />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input id="email" type="email" placeholder="john@acme.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" type="url" placeholder="https://acme.com" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role">Role *</Label>
                <Select required>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cfo">CFO</SelectItem>
                    <SelectItem value="finance-manager">Finance Manager</SelectItem>
                    <SelectItem value="fpa">FP&A</SelectItem>
                    <SelectItem value="founder">Founder / CEO</SelectItem>
                    <SelectItem value="consultant">Finance Consultant</SelectItem>
                    <SelectItem value="fractional-cfo">Fractional CFO</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="size">Company Size *</Label>
                <Select required>
                  <SelectTrigger id="size">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-500">201-500 employees</SelectItem>
                    <SelectItem value="500+">500+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry *</Label>
              <Select required>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="saas">SaaS / Software</SelectItem>
                  <SelectItem value="fintech">Fintech</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="consulting">Consulting / Services</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Why do you want to join? *</Label>
              <Textarea
                id="reason"
                placeholder="Tell us about your current financial planning challenges and what you hope to achieve..."
                rows={4}
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Apply to Join Design Partner Program
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              We review every application personally. You'll hear back within 48 hours.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
