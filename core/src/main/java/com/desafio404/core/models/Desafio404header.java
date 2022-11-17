/*
 * ***********************************************************************
 * Desafio 404 CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Desafio 404.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Desafio 404 and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Desafio 404
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Desafio 404.
 * ***********************************************************************
 */

package com.desafio404.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Desafio404header} Sling Model used for the {@code desafio404/components/desafio404header} component.
 * 
 */
@ConsumerType
public interface Desafio404header
    extends ComponentExporter
{


    @JsonProperty("title")
    String getTitle();

}
