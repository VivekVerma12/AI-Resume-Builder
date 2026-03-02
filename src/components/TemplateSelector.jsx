import { Layout } from 'lucide-react';
import React, { useState } from 'react'

const TemplateSelector = ({ selectedTemplate, onChange }) => {

    const [isOpen, setIsOpen] = useState(false);

    const templates = [
        {
            id: "classic",
            name: "Classic",
            preview: "A clean, traditional resume format with clear sections and professional typography."
        },
        {
            id: "modern",
            name: "Modern",
            preview: "A sleek, contemporary resume format with bold design elements and modern aesthetics."
        },
        {
            id: "minimal-image",
            name: "Minimal Image",
            preview: "A clean, minimalist resume format with a subtle image header and ample white space."
        },
        {
            id: "minimal",
            name: "Minimal",
            preview: "A clean, minimalist resume format with ample white space and a focus on readability."
        },
    ]
    return (
        <div className='relative'>
            <button onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-1 text-sm text-blue-600
        bg-gradient-to-br from-blue-500 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg'>
                <Layout size={14} /> <span className='max-sm:hidden'>
                    Template
                </span>
            </button>
        </div>
    )
}

export default TemplateSelector