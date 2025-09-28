import React, { useState } from "react";
import { TrashIcon, DocumentIcon, DownloadIcon } from "@/components/Icons";

interface Attachment {
  id?: string;
  filename?: string;
  size?: number;
  name?: string;
  url?: string;
  downloadUrl?: string;
}

interface ExistingAttachmentsProps {
  attachments: Attachment[];
  onRemove: (index: number) => void;
  onAttachmentDeleted?: (attachmentId: string) => void;
  isLoading?: boolean;
  readOnly?: boolean; // Hide delete functionality when true
}

const ExistingAttachments: React.FC<ExistingAttachmentsProps> = ({
  attachments,
  onRemove,
  onAttachmentDeleted,
  isLoading = false,
  readOnly = false,
}) => {
  const [deletingAttachmentId, setDeletingAttachmentId] = useState<
    string | null
  >(null);

  const handleDeleteAttachment = async (
    attachment: Attachment,
    index: number,
  ) => {
    // If attachment has an ID, call the deletion handler
    if (attachment.id && onAttachmentDeleted) {
      setDeletingAttachmentId(attachment.id);
      try {
        await onAttachmentDeleted(attachment.id);
      } finally {
        setDeletingAttachmentId(null);
      }
    } else {
      // Fallback to local removal for new attachments
      onRemove(index);
    }
  };

  const handleDownloadAttachment = (attachment: Attachment) => {
    const downloadUrl = attachment.downloadUrl || attachment.url;
    const filename = attachment.filename || attachment.name || "attachment";

    if (downloadUrl) {
      // Create a temporary link element to trigger download
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.warn("No download URL available for attachment:", attachment);
    }
  };
  if (!attachments || attachments.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Current Attachments
      </h4>
      <div className="space-y-2">
        {attachments.map((attachment, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-600 dark:bg-gray-700"
          >
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <DocumentIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {attachment.filename ||
                    attachment.name ||
                    `Attachment ${index + 1}`}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {attachment.size
                    ? `${(attachment.size / 1024).toFixed(1)} KB`
                    : "Unknown size"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {/* Download Button */}
              {(attachment.downloadUrl || attachment.url) && (
                <button
                  type="button"
                  onClick={() => handleDownloadAttachment(attachment)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 transition-colors hover:bg-green-200 dark:bg-green-900 dark:text-green-400 dark:hover:bg-green-800"
                  title="Download attachment"
                >
                  <DownloadIcon className="h-4 w-4" />
                </button>
              )}

              {/* Delete Button */}
              <button
                type="button"
                onClick={() => handleDeleteAttachment(attachment, index)}
                disabled={deletingAttachmentId === attachment.id || isLoading}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 transition-colors hover:bg-red-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900 dark:text-red-400 dark:hover:bg-red-800"
                title="Delete attachment"
              >
                {deletingAttachmentId === attachment.id ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-red-600 border-t-transparent" />
                ) : (
                  <TrashIcon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExistingAttachments;
